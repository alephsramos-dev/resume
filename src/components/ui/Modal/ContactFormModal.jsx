import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Controller, useForm } from "react-hook-form";
import AlephIcon from "@assets/brands/aleph.svg?react";
import { XIcon } from "@phosphor-icons/react/dist/ssr";
import { sendToSheet } from "@/lib/sendToSheet";
import { usePersistedQueryParams } from "@/contexts/UtmContext.jsx";

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => rgba(props.theme.colors.black[100] || "#000", 0.15)};
	backdrop-filter: blur(4px);
	z-index: 9999;
	padding: 20px;
	opacity: 0;

	&[data-state="open"] {
		animation: overlayShow 220ms ease forwards;
	}

	&[data-state="closing"] {
		animation: overlayHide 180ms ease forwards;
	}

	@keyframes overlayShow {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes overlayHide {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;

const modalSurface = css`
	width: min(460px, 100%);
	background: ${(props) => rgba(props.theme.colors.black[900] || "#0a0a0a", 0.90)};
    backdrop-filter: blur(12px);
	border-radius: 32px;
	border: 2px solid ${(props) => rgba(props.theme.colors.black[500], 0.10)};
	box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
	${modalSurface};
	padding: 28px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	opacity: 0;
	transform: translateY(12px) scale(0.98);

	&[data-state="open"] {
		animation: modalShow 260ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}

	&[data-state="closing"] {
		animation: modalHide 180ms ease forwards;
	}

	@media (max-width: 480px) {
		padding: 24px 20px;
		border-radius: 26px;
	}

	@keyframes modalShow {
		from {
			opacity: 0;
			transform: translateY(12px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes modalHide {
		from {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		to {
			opacity: 0;
			transform: translateY(8px) scale(0.96);
		}
	}
`;

const Header = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 16px;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;

        & svg {
            width: 24px;
            height: 24px;
        }
    }

	& h2 {
		font-size: 22px;
		line-height: 1.3;
		color: ${(props) => props.theme.colors.white[100]};
		font-weight: ${(props) => props.theme.fontWeights.medium};
	}

	& p {
		margin-top: 6px;
		font-size: 14px;
		color: ${(props) => rgba(props.theme.colors.gray[100], 0.85)};
		line-height: 1.5;
	}
`;

const CloseButton = styled.button`
	appearance: none;
	border: none;
	background: transparent;
	color: ${(props) => rgba(props.theme.colors.gray[100], 0.7)};
	cursor: pointer;
	padding: 6px;
	border-radius: 50%;
	transition: background 0.2s ease, color 0.2s ease;

	&:hover {
		background: ${(props) => rgba(props.theme.colors.gray[300], 0.18)};
		color: ${(props) => props.theme.colors.white[100]};
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

const Fieldset = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;
    position: relative;

	span {
		font-size: 14px;
		color: ${(props) => props.theme.colors.white[100]};
		font-weight: ${(props) => props.theme.fontWeights.light};
	}

	input {
		width: 100%;
		height: 48px;
		border-radius: 0px;
		border-bottom: 1px solid ${(props) => rgba(props.theme.colors.gray[300], 0.10)};
		color: ${(props) => props.theme.colors.white[100]};
		font-size: 15px;
		transition: border 0.2s ease, background 0.2s ease;

		&:focus {
			outline: none;
			border-color: ${(props) => rgba(props.theme.colors.pink.basic || props.theme.colors.pink.basic, 0.25)};
		}

		&::placeholder {
			color: ${(props) => rgba(props.theme.colors.gray[200], 0.6)};
		}
	}
`;

const ErrorText = styled.small`
	color: ${(props) => props.theme.colors.red?.basic || "#ff6b6b"};
	font-size: 12px;
	line-height: 1.4;
`;

const CheckboxRow = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	color: ${(props) => rgba(props.theme.colors.gray[100], 0.85)};
	font-size: 14px;
	line-height: 1.5;

	input {
		width: 18px;
		height: 18px;
		border-radius: 6px;
		border: 1px solid ${(props) => rgba(props.theme.colors.gray[300], 0.45)};
		background: ${(props) => rgba(props.theme.colors.gray[800] || "#0f0f0f", 0.6)};
		accent-color: ${(props) => props.theme.colors.pink.basic};
		appearance: none;
		display: grid;
		place-content: center;
		transition: border 0.2s ease, background 0.2s ease;
        cursor: pointer;

            &:focus {
                outline: none;
                box-shadow: 0 0 0 3px ${(props) => rgba(props.theme.colors.pink.basic, 0.25)};
            }

            &::before {
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 3px;
                transform: scale(0);
                transition: transform 0.18s ease;
                background: ${(props) => props.theme.colors.pink.basic};
            }

            &:checked {
                border-color: ${(props) => rgba(props.theme.colors.pink.basic, 0.9)};
                background: ${(props) => rgba(props.theme.colors.pink.basic, 0.2)};
            }

            &:checked::before {
                transform: scale(1);
            }
        }

        & p {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 4px;
            width: auto;
            flex: 1;
            height: 100%;
            line-height: 100%;

            & a {
                color: ${(props) => props.theme.colors.blue.light};
                border: 1px solid red;
                text-decoration: underline;
            }
        }

`;

const SubmitButton = styled.button`
	margin-top: 4px;
	height: 52px;
	border-radius: 999px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	font-size: 15px;
	font-weight: ${(props) => props.theme.fontWeights.medium};
	cursor: pointer;
	background: ${(props) => props.theme.colors.pink.basic};
	color: ${(props) => props.theme.colors.gray[900] || "#0a0a0a"};
	transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, background 0.3s ease;

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.45);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}

	&[data-success="true"] {
		background: #3bd671;
	}

	.spinner {
		width: 16px;
		height: 16px;
		border: 2px solid ${(props) => props.theme.colors.gray[900]};
		border-top-color: transparent;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
	}

	.check {
		width: 20px;
		height: 20px;
		animation: checkScale 0.3s ease;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	@keyframes checkScale {
		0% { transform: scale(0); }
		50% { transform: scale(1.2); }
		100% { transform: scale(1); }
	}
`;

const TriggerButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	border: 1px solid ${(props) => rgba(props.theme.colors.gray[300], 0.35)};
	background: ${(props) => rgba(props.theme.colors.gray[200], 0.12)};
	color: ${(props) => props.theme.colors.white[100]};
	padding: 12px 20px;
	border-radius: 999px;
	cursor: pointer;
	backdrop-filter: blur(4px);
	transition: background 0.2s ease, border 0.2s ease, transform 0.2s ease;

	&:hover {
		background: ${(props) => rgba(props.theme.colors.gray[200], 0.2)};
		border-color: ${(props) => rgba(props.theme.colors.gray[300], 0.45)};
		transform: translateY(-1px);
	}
`;

function normalizeDigits(value = "") {
    return value.replace(/\D/g, "");
}

function formatPhoneDisplay(value = "") {
    const digitsOnly = normalizeDigits(value);
    let localDigits = digitsOnly;

    if (localDigits.startsWith("55")) {
        localDigits = localDigits.slice(2);
    }

    const limited = localDigits.slice(0, 11);
    const area = limited.slice(0, 2);
    const first = limited.slice(2, 7);
    const second = limited.slice(7, 11);

    let formatted = "+55";

    if (area.length) {
        formatted += ` (${area}`;
        if (area.length === 2) {
            formatted += ")";
        }
    } else {
        formatted += " ";
    }

    if (first.length) {
        formatted += area.length === 2 ? " " : "";
        formatted += first;
    }

    if (second.length) {
        formatted += `-${second}`;
    }

    return formatted.trimEnd();
}

function formatPhoneToE164(value = "") {
    const digitsOnly = normalizeDigits(value);
    const withoutCountry = digitsOnly.startsWith("55") ? digitsOnly : `55${digitsOnly}`;
    const limited = withoutCountry.slice(0, 13);
    return limited ? `+${limited}` : "+55";
}

function buildWhatsappMessage(payload) {
    const segments = [
        "Olá, vim do seu site e gostaria de solicitar um orçamento!",
    ];

    if (payload?.name) {
        segments.push(`Meu nome é ${payload.name}.`);
    }

    if (payload?.page?.url) {
        segments.push(`Estou vendo a página ${payload.page.url}.`);
    }

    if (payload?.utm?.source) {
        segments.push(`Origem: ${payload.utm.source}.`);
    }

    return encodeURIComponent(segments.join(' '));
}

export default function ContactFormModal({
    triggerLabel = "Quero ser contatado",
    trigger,
    source = "Contato Modal",
    privacyPolicyUrl,
    onOpenChange
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const { params: utmData } = usePersistedQueryParams();
    const previousOverflow = useRef();
    const closeTimerRef = useRef();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        setFocus
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "+55 ",
            agree: false
        }
    });

    const toggleBodyScroll = useCallback((locked) => {
        if (typeof document === "undefined") {
            return;
        }
        if (locked) {
            previousOverflow.current = document.body.style.overflow;
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = previousOverflow.current || "";
        }
    }, []);

    const finalizeClose = useCallback(() => {
        setIsOpen(false);
        setIsAnimatingOut(false);
        toggleBodyScroll(false);
        if (onOpenChange) {
            onOpenChange(false);
        }
    }, [onOpenChange, toggleBodyScroll]);

    const openModal = useCallback(() => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = undefined;
        }
        setIsOpen(true);
        setIsAnimatingOut(false);
        toggleBodyScroll(true);
        if (onOpenChange) {
            onOpenChange(true);
        }
        requestAnimationFrame(() => {
            setFocus("name");
        });
    }, [onOpenChange, setFocus, toggleBodyScroll]);

    const closeModal = useCallback(() => {
        if (isAnimatingOut) {
            return;
        }
        setIsAnimatingOut(true);
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }
        closeTimerRef.current = setTimeout(() => {
            finalizeClose();
            closeTimerRef.current = undefined;
        }, 200);
    }, [finalizeClose, isAnimatingOut]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [closeModal, isOpen]);

    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }
            toggleBodyScroll(false);
        };
    }, [toggleBodyScroll]);

    const onSubmit = useCallback(
        async (formValues) => {
            const phone = formatPhoneToE164(formValues.phone);

            const payload = {
                type: "modal",
                source,
                name: formValues.name.trim(),
                phone,
                agree: formValues.agree || false,
                utm: utmData,
                page: typeof window !== "undefined"
                    ? {
                        url: window.location.href,
                        title: document.title,
                        referrer: document.referrer || undefined
                    }
                    : undefined
            };

            // Envia para Google Sheets ANTES do redirect
            console.log('[ContactFormModal] Enviando para Sheets...', payload);
            await sendToSheet(payload);
            console.log('[ContactFormModal] Enviado!');

            // Mostra check de sucesso
            setSubmitSuccess(true);

            // Aguarda 800ms para mostrar o feedback visual
            await new Promise(resolve => setTimeout(resolve, 800));

            const message = buildWhatsappMessage(payload);
            const whatsappUrl = `https://wa.me/5524981411940?text=${message}`;

            closeModal();
            setSubmitSuccess(false);

            if (typeof window !== "undefined") {
                window.location.href = whatsappUrl;
            }

            return payload;
        },
        [closeModal, source, utmData]
    );

    const renderTrigger = () => {
        if (typeof trigger === "function") {
            return trigger({ onClick: openModal });
        }

        if (React.isValidElement(trigger)) {
            return React.cloneElement(trigger, {
                onClick: (event) => {
                    if (typeof trigger.props?.onClick === "function") {
                        trigger.props.onClick(event);
                    }
                    openModal();
                }
            });
        }

        return <TriggerButton onClick={openModal}>{triggerLabel}</TriggerButton>;
    };

    const isMounted = isOpen || isAnimatingOut;
    const transitionState = isAnimatingOut ? "closing" : "open";

    const modalContent = isMounted ? (
        <Overlay
            data-state={transitionState}
            role="presentation"
            onClick={closeModal}
            aria-modal="true"
            aria-hidden={!isOpen}
        >
            <Container
                data-state={transitionState}
                role="dialog"
                aria-labelledby="contact-form-title"
                onClick={(event) => event.stopPropagation()}
            >
                <Header>
                    <div>
                        <AlephIcon />
                        <h2 id="contact-form-title">Vamos conversar?</h2>
                    </div>
                    <CloseButton type="button" aria-label="Fechar" onClick={closeModal}>
                        <XIcon />
                    </CloseButton>
                </Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Fieldset>
                        <span>Nome</span>
                        <input
                            {...register("name", {
                                required: "Informe seu nome",
                                minLength: { value: 2, message: "Mínimo de 2 caracteres" }
                            })}
                            placeholder="Como podemos te chamar?"
                            autoComplete="name"
                        />
                        {errors.name?.message ? <ErrorText>{errors.name.message}</ErrorText> : null}
                    </Fieldset>

                    {/* Email removido por solicitação */}

                    <Fieldset>
                        <span>Telefone</span>
                        <Controller
                            control={control}
                            name="phone"
                            rules={{
                                required: "Informe um telefone válido",
                                validate: (value) => {
                                    const normalized = formatPhoneToE164(value);
                                    return normalized.length >= 14 ? true : "Informe um telefone válido";
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="+55 (24) 98141-1940"
                                    onChange={(event) => field.onChange(formatPhoneDisplay(event.target.value))}
                                />
                            )}
                        />
                        {errors.phone?.message ? <ErrorText>{errors.phone.message}</ErrorText> : null}
                    </Fieldset>

                    <CheckboxRow>
                        <input
                            type="checkbox"
                            {...register("agree", {
                                required: "Você precisa concordar com a política de privacidade"
                            })}
                        />
                        <p>
                            Concordo com a
                            {" "}
                            {privacyPolicyUrl ? (
                                <a href={privacyPolicyUrl} target="_blank" rel="noreferrer">
                                    política de privacidade
                                </a>
                            ) : (
                                "política de privacidade"
                            )}
                            .
                        </p>
                    </CheckboxRow>
                    {errors.agree?.message ? <ErrorText>{errors.agree.message}</ErrorText> : null}

                    <SubmitButton type="submit" disabled={!isValid || isSubmitting} data-success={submitSuccess}>
                        {isSubmitting && !submitSuccess && (
                            <>
                                <div className="spinner" />
                                Enviando...
                            </>
                        )}
                        {submitSuccess && (
                            <>
                                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Enviado!
                            </>
                        )}
                        {!isSubmitting && !submitSuccess && "Entrar em contato"}
                    </SubmitButton>
                </Form>
            </Container>
        </Overlay>
    ) : null;

    return (
        <>
            {renderTrigger()}
            {isMounted && typeof document !== "undefined" ? createPortal(modalContent, document.body) : null}
        </>
    );
}
