enum GENDER {
    WOMAN,
    MAN,
    OTHER
}

interface Invitee {
    id: number
    name: string
    gender: GENDER
}

export { GENDER, type Invitee }