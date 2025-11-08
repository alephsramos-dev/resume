// Diferentes variantes de transição de página
// Você pode trocar facilmente entre elas no PageTransition.jsx

// 1. Fade + Slide (padrão - suave e elegante)
export const fadeSlide = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// 2. Slide Horizontal (efeito de deslizar para os lados)
export const slideHorizontal = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// 3. Scale + Fade (zoom suave)
export const scaleFade = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// 4. Blur + Fade (efeito de desfoque)
export const blurFade = {
    initial: {
        opacity: 0,
        filter: 'blur(10px)',
    },
    animate: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        filter: 'blur(10px)',
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// 5. Rotate + Fade (rotação sutil)
export const rotateFade = {
    initial: {
        opacity: 0,
        rotateX: 10,
        y: 20,
    },
    animate: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        rotateX: -10,
        y: -20,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// 6. Smooth Slide Up (slide vertical suave)
export const smoothSlideUp = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1], // easeOutExpo
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            duration: 0.5,
            ease: [0.7, 0, 0.84, 0], // easeInExpo
        },
    },
};
