'use client';

export function sendEmail() {
    setTimeout (() => {
        window.location.href = "mailto:wing@me.wing.osaka";
    }, 3)
}
  
export const openSNS = (platform) => {
    window.open(`./SNS/${platform}`, '_blank');
};