import { Link } from '@inertiajs/react';

export default function Button({
    type = 'submit',
    className = '',
    disabled = false,
    as = 'button',
    href,
    method = 'get',
    children,
    ...props
}) {
    const baseClasses = "bg-primary-red max-w-[180px] text-center text-white px-2 lg:px-6 py-3 font-medium rounded-lg cursor-pointer hover:bg-red-hover disabled:opacity-50 disabled:cursor-not-allowed";

    if (as === 'link' && href) {
        return (
            <Link
                href={href}
                method={method}
                className={`${baseClasses} ${className}`}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={`${baseClasses} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
