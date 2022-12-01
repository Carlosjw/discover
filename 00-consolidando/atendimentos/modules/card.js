function createCard(atendType, atendPass, atendTable){
    let card = Object.create({})
    card.atendType = atendType;
    card.atendPass = atendPass;
    card.atendTable = atendTable;
}

export default createCard;
