'use client';

export function sendEmail() {
    setTimeout (() => {
        window.location.href = "mailto:wing@me.wing.osaka";
    }, 3)
}
  
export const openSNS = (platform) => {
    window.open(`https://r.wing.osaka/s/${platform}`, '_blank');
};