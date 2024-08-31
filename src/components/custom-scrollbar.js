import React, { useState, useRef, useEffect } from "react";

const CustomScrollbar = ({ children, className = "" }) => {
  const [scrollBarHeight, setScrollBarHeight] = useState(0);
  const [scrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { clientHeight, scrollHeight } = container;
    const scrollBarHeight = (clientHeight / scrollHeight) * clientHeight;
    setScrollBarHeight(scrollBarHeight);

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const newThumbPosition =
        (scrollPosition / maxScroll) *
        (container.clientHeight - scrollBarHeight);
      setScrollThumbPosition(newThumbPosition);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThumbMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const container = containerRef.current;
      const { top: containerTop, height: containerHeight } =
        container.getBoundingClientRect();
      const thumbHeight = thumbRef.current.clientHeight;
      const maxThumbPosition = containerHeight - thumbHeight;
      const y = Math.min(
        Math.max(0, e.clientY - containerTop - thumbHeight / 2),
        maxThumbPosition
      );
      const scrollPosition =
        (y / maxThumbPosition) * (container.scrollHeight - containerHeight);
      container.scrollTop = scrollPosition;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={`relative h-full ${className}`}>
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll pr-4 scrollbar-hide"
        style={{ paddingRight: "20px", marginRight: "-20px" }}
      >
        {children}
      </div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gray-200">
        <div
          ref={thumbRef}
          className="w-full bg-gray-400 rounded cursor-pointer hover:bg-gray-500 transition-colors"
          style={{
            height: `${scrollBarHeight}px`,
            transform: `translateY(${scrollThumbPosition}px)`,
          }}
          onMouseDown={handleThumbMouseDown}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
