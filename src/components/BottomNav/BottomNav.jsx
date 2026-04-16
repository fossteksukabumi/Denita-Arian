import { useState } from "react";
import {
  NavWrapper,
  NavContainer,
  NavButton,
  NavIcon,
  NavLabel,
  NavIndicator,
} from "./BottomNav.style";

function BottomNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: "🏠", label: "Home", target: "#cover" },
    { icon: "📸", label: "Gallery", target: "#gallery" },
    { icon: "💌", label: "Ucapan", target: "#wish" },
  ];

  const handleNavClick = (index, target) => {
    setActiveIndex(index);
    
    // Smooth scroll ke section
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavWrapper>
      <NavContainer>
        {navItems.map((item, index) => (
          <NavButton
            key={index}
            $active={activeIndex === index}
            onClick={() => handleNavClick(index, item.target)}
          >
            <NavIcon $active={activeIndex === index}>{item.icon}</NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavButton>
        ))}
      </NavContainer>
      <NavIndicator $position={activeIndex} />
    </NavWrapper>
  );
}

export default BottomNav;