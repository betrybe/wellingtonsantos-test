export const tratarMoeda = (moeda) => {
    return Object.keys(moeda).map(key => moeda[key])
};