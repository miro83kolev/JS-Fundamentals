function partyTime(input) {
    let vip = new Set()
    let regular = new Set()

    while (input[0] != 'PARTY') {
        let guest = input.shift()
        if (Number.isNaN(Number(guest[0]))) {
            regular.add(guest)
        } else {
            vip.add(guest)
        }
    }

    for (let guest of input) {
        vip.delete(guest)
        regular.delete(guest)
    }

    console.log(vip.size + regular.size)

    for (let guest of vip) {
        console.log(guest)
    }

    for (let guest of regular) {
        console.log(guest)
    }
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)


function partyTime(input) {
    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let VIP = [];
    let regular = [];
    for (let guest of invitedList) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            VIP.push(guest);
        } else {
            regular.push(guest);
        }
    }
    for (let guest of input) {
        if (VIP.includes(guest)) {
            VIP.splice(VIP.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    console.log(VIP.length + regular.length);
    VIP.forEach((x) => console.log(x));
    regular.forEach((x) => console.log(x));
}
