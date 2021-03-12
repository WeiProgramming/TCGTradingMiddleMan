// const userTradeData = {
//     12345: {
//         offer: {
//             cardId: 1234567,
//             cardSetId: 87654,
//             condition: 3,
//             edition: 2
//         },
//         accept: {
//             money: {
//                 isChecked: true,
//                 amount: 123.32
//             },
//             card: {
//                 isChecked: true,
//                 id: 13241241,
//                 condition: [1,2,4,5],
//                 edition: [1,2,3,4,5]
//             }
//         },
//         saved: {
//             total: 45,
//             savedBy: [
//                 1213214,
//                 1321412421,
//                 5432642,
//                 54325342
//             ]
//         }
//     }
// }
import {db} from '../../firebase';

export const addFireStoreUserTradePost = ({uid}, formTrade, formTradeFor) => {
    return new Promise( async (resolve , reject) => {
        console.log('user being passed in to be added ', uid);
        let response = await db.collection('trades').doc(uid).set({
            trade: {
                cardId: formTrade["card"]["id"],
                cardSetId: formTrade["setName"],
                condition: formTrade["card-condition"],
                edition: formTrade["card-edition"]
            },
            tradeFor: {
                money: {
                    isChecked: true,
                    amount: formTradeFor["amount"]
                },
                card: {
                    cardId: formTradeFor["card"]["id"],
                    cardSetId: formTradeFor["setName"],
                    condition: [1,2,4,5],
                    edition: [1,2,3,4,5]
                }
            },
            saved: {
                total: 45,
                savedBy: [
                    1213214,
                    1321412421,
                    5432642,
                    54325342
                ]
            }
        });
        setTimeout(() => {
            console.log('response from adduser to firestore ', response)
            resolve(response);
        }, 300)
    })
}