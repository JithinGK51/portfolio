import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Web & Mobile App Developer",
  "Android Developer",
  "Co-Founder @ Crafzio",
  "Member @ Roarstar Technology",
];

const TypeWriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="font-mono text-muted-foreground text-sm md:text-base">
      {roles[roleIndex].substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
