import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaUser } from 'react-icons/fa';

const shine = keyframes`
  0% { transform: translateX(-120%); opacity: 0; }
  30% { opacity: .35; }
  60% { opacity: .35; }
  100% { transform: translateX(220%); opacity: 0; }
`;

const ButtonRoot = styled.a`
  --bg: #000;
  --fg: #fff;
  --radius: 10px;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--bg);
  color: var(--fg);
  padding: 8px 12px;
  border-radius: var(--radius);
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  border: 1px solid #ffffff10;
  box-shadow: 0 4px 18px -6px #000, 0 0 0 1px #ffffff10 inset;
  transition: background .35s ease, transform .25s ease, box-shadow .35s ease;
  isolation: isolate;

  &:hover { background: #0c0c0c; box-shadow: 0 6px 22px -6px #000, 0 0 0 1px #ffffff20 inset; }
  &:active { transform: translateY(2px); }
  &:focus-visible { outline: 2px solid #ffffff60; outline-offset: 3px; }

  &::after { /* shine */
    content: '';
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 40%;
    background: linear-gradient(115deg, transparent 0%, rgba(255,255,255,.4) 50%, transparent 100%);
    mix-blend-mode: screen;
    transform: translateX(-120%);
    animation: ${shine} 5s linear infinite;
    pointer-events: none;
  }
`;

const Left = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  svg { width: 18px; height: 18px; }
`;

const Stat = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #111;
  padding: 5px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 300;
  color: #fff;
  border: 1px solid #ffffff15;
  box-shadow: 0 0 0 1px #ffffff08 inset;
  svg { width: 10px; height: 10px; opacity: .85; }
`;

const SkeletonBar = styled.span`
  display: inline-block;
  width: 28px;
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #333 0%, #555 50%, #333 100%);
  background-size: 200% 100%;
  animation: loading 1.2s ease-in-out infinite;
  @keyframes loading { 0% { background-position: 0 0; } 100% { background-position: -200% 0; } }
`;

export default function GitHubFollowersButton({ username = 'alephsramos-dev' }) {
  const [followers, setFollowers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${username}`, { signal: controller.signal })
      .then(r => {
        if (!r.ok) throw new Error('GitHub API error');
        return r.json();
      })
      .then(data => setFollowers(data.followers))
      .catch(err => { if (err.name !== 'AbortError') setError(true); });
    return () => controller.abort();
  }, [username]);

  return (
    <ButtonRoot href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" aria-label={`Ver perfil no GitHub de ${username}`}> 
      <Left>
        <FaGithub />
        <span>GitHub</span>
      </Left>
      <Stat>
        <FaUser />
        {error ? '—' : followers === null ? <SkeletonBar /> : followers}
      </Stat>
    </ButtonRoot>
  );
}