import {db} from '../../firebase';

export const addFireStoreUserTradePost = ({uid}, formTrade, formTradeFor) => {
    console.log('about to add to fb formTrade ', formTrade);
    console.log('about to add to fb formTradeFor ', formTradeFor);

    return new Promise( async (resolve , reject) => {
        console.log('user being passed in to be added ', uid);
        // let response = {}
        let response = await db.collection('trades').add({
            userId: uid,
            created: new Date(),
            trade: {
                cardId: formTrade["card"]["id"],
                card: formTrade["card"],
                cardSetId: formTrade["setName"],
                condition: formTrade["cardCondition"],
                edition: formTrade["cardEdition"]
            },
            tradeFor: {
                money: {
                    isChecked: true,
                    amount: "12.00"
                },
                card: {
                    isChecked: true,
                    cardId: 22910685,
                    cardSetId: "LOB-EN034",
                    condition: [1,2,4,5],
                    edition: [1,2,3,4,5]
                }
            },
            favorites: {}
        });
        setTimeout(() => {
            console.log('response from adduser to firestore ', response)
            resolve(response);
        }, 300)
    })
}

export const updateUserToWatchList = (currentUserId, tradeId) => {
    let favRef = db.collection(`trades`).doc(`${tradeId}`);
    favRef.update({
        favorites: [
        ]
    });
}

export const getLatestTrades = async () => {
    let tradeRef = db.collection("trades");
    let data = [];
    await tradeRef.orderBy("created", "desc").limit(4).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                data.push({id: doc.id, data: doc.data()});
            });
        })
    return data;
}


export const getUserTrades = async ({uid}) => {
    let tradeRef = db.collection("trades");
    let allData = [];
    let filteredData = [];
    await tradeRef.orderBy("created", "desc").limit(8).get().then((querySnapshot) => 
    {
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
             allData.push({id: doc.id, data: doc.data()});
            });
    });
    allData.forEach(item => {
        console.log('test passed id ', uid);
        console.log('test passed userid ', item["data"]["userId"]);

        if(item["data"]["userId"] === uid) {
            filteredData.push(item);
        }
    })
    return filteredData;
}

