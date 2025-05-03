"use client";
import GlowingLogo from './GlowingLogo';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect, useRef } from 'react';

interface FrontPageLayoutProps {
    handleButtonClick: () => void;
}

export default function FrontPageLayout({ handleButtonClick }: FrontPageLayoutProps) {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the component is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Left Section */}
            <div
                ref={sectionRef}
                className="absolute left-0 w-1/3 h-screen flex flex-col items-center z-10 md:w-1/2"
            >
                <div className="flex-1 flex flex-col justify-center gap-5 mx-8">
                    {/* Logo - visible only on md+ */}
                    <div className="hidden md:block w-full flex flex-col items-center mb-8">
                        <div className="relative w-3/5 sm:w-4/5">
                            <GlowingLogo />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-left">
                        Welcome to DSCubed!
                    </h1>
                    {isInView ? (
                        <TypeAnimation
                            sequence={[
                                "Empowering Future Data Scientists", // Text to type
                                1000, // Pause for 1 second after typing
                            ]}
                            speed={80}
                            wrapper="p"
                            cursor={true}
                            repeat={0} // Do not repeat the animation
                            className="text-left"
                        />
                    ) : (
                        <p className="text-left">Loading...</p>
                    )}
                    <button
                        onClick={handleButtonClick}
                        className="bg-white text-black px-4 py-2 rounded-md w-3/4 text-sm font-medium hover:bg-gray-100 animate transition-colors lg:w-full sm:w-full"
                    >
                        Explore Data Science with our Embeddings Visualiser
                    </button>
                </div>
            </div>

            {/* Right Section - hidden on md or lower */}
            <div className="absolute right-0 w-1/3 h-screen flex flex-col items-center z-50 md:hidden">
                <div className="flex-1 flex flex-col items-center justify-center w-3/5 relative">
                    <GlowingLogo />
                </div>
            </div>
        </>
    );
}