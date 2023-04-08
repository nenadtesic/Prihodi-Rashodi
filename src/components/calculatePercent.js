const calculatePercent = (value, prihodi) => {
    let vrednostPrihoda = prihodi.reduce((total, el) => total + el.value, 0)
    if (vrednostPrihoda == 0 && value == 0) return 0
    return (vrednostPrihoda ? value / vrednostPrihoda * 100 : 100).toFixed()
};

export default calculatePercent;