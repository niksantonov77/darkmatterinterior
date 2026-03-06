

export const MirIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="0" y="24" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1" fill="currentColor">
            МИР
        </text>
        <path d="M75 14 C85 4, 95 10, 100 20 L95 28 C90 18, 80 12, 70 22 Z" fill="currentColor" />
    </svg>
);

export const VisaIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="0" y="24" fontSize="28" fontWeight="900" fontFamily="Arial, sans-serif" fontStyle="italic" letterSpacing="-2" fill="currentColor">
            VISA
        </text>
    </svg>
);

export const MastercardIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="16" cy="15" r="14" fill="currentColor" opacity="0.8" />
        <circle cx="34" cy="15" r="14" fill="currentColor" opacity="0.6" />
    </svg>
);

export const TPayIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="24" height="24" rx="12" fill="currentColor" opacity="0.2" />
        <path d="M8 8H16V10H13V18H11V10H8V8Z" fill="currentColor" />
        <text x="28" y="17" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">
            T-Pay
        </text>
    </svg>
);

export const TBankIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="24" height="24" rx="12" fill="currentColor" opacity="0.2" />
        <path d="M8 8H16V10H13V18H11V10H8V8Z" fill="currentColor" />
        <text x="28" y="17" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">
            Т-Банк
        </text>
    </svg>
);
