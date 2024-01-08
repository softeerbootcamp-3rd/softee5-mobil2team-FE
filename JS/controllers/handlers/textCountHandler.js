const textCnt = document.querySelector('.upload__text-count');

export const textCountHandler = (target) => {
    const length = target.value.length;
    textCnt.textContent = `${length}/100`;

    if(length > 100) {
        text.value = text.substring(0, 100);
        textCnt.textContent = '100/100';
    }
}