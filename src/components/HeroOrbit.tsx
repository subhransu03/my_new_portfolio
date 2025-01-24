import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const HeroOrbit = ({
        children,
        size,
        rotation,
        shouldOrbit = false,
        orbitDuration = '10', // Default value for spinDuration
        shouldSpin = false,
        spinDuration,
}: PropsWithChildren<{ size: number; rotation: number; orbitDuration?: string; shouldOrbit?: boolean; shouldSpin?:boolean; spinDuration?: string; }>) => {
        return (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
                        <div
                                className={twMerge(shouldOrbit === true && "animate-spin")}
                                style={{
                                        animationDuration: orbitDuration, // Ensure spinDuration is a string with units (e.g., "10s")
                                }}
                        >
                                <div
                                        className="flex items-start justify-start"
                                        style={{
                                                transform: `rotate(${rotation}deg)`,
                                                height: `${size}px`,
                                                width: `${size}px`,
                                        }}
                                >
                                        <div className={twMerge(shouldSpin === true && 'animate-spin')} 
                                                style={{
                                                        animationDuration: spinDuration // Ensure spinDuration is a string with units (e.g., "10s")
                                                }}>
                                                
                                                <div
                                                        className="inline-flex"
                                                        style={{
                                                                transform: `rotate(${rotation * -1}deg)`,
                                                        }}
                                                >
                                                        {children}
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};