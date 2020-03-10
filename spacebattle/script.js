// let currentShip = 0;
alert('Welcome to Space Battle')
let humanShip = {
    hull: 20,
    firePower: 5,
    accuracy: .7
}

let babyShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firePower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.random()
}
let sisterShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firePower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.random()
}
let brotherShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firePower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.random()
}
let auntieShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,    
    firePower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.random()
}
let fatherShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firePower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.random()
}
let motherShip = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firePower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: Math.random()
}

// console.log(babyShip);
// let ailenShips = [babyShip, sisterShip, brotherShip, auntieShip, fatherShip, motherShip];
let wastedShip = [];
let gameOver = () => {
    console.log('GAME OVER! Way to save Earth, Loser!');
};
// // let hit = Math.random(); 

let attack = () => {
    let choice = prompt('Will you Fight or Flight?');
    if (choice.toLowerCase() === 'fight') {
        for(babyShip.hull; babyShip.hull > 0; babyShip.hull) {
            if (humanShip.hull > 0) {
                if (humanShip.accuracy < .8) {
                    babyShip.hull = babyShip.hull - humanShip.firePower;
                    console.log(`You blasted the ship with ${humanShip.firePower} Fire Power! Well Done Soldier!`);
                    console.log(`Ship Hull: ${babyShip.hull}`);
                } if (babyShip.hull > 0) {
                    if (babyShip.accuracy <= .8 && babyShip.accuracy >= .6) {
                        humanShip.hull = humanShip.hull - babyShip.firePower; 
                        console.log(`You've been hit with ${babyShip.firePower} Fire Power!`);
                    } else {
                        console.log(`They missed!`);
                    }
                } else {
                    wastedShip.push('babyShip');
                    console.log('Ship Defeated: ' + wastedShip);
                    console.log('BABY IS DOWN!!!')
                    console.log('Your Hull: ' + humanShip.hull);
                }
            }
        }
    } else if (choice.toLowerCase() === 'flight') {
       gameOver();
       return;
    };
    let choice2 = prompt('Will you Fight or Flight?');
    if (choice2.toLowerCase() === 'fight') {
        for(sisterShip.hull; sisterShip.hull > 0; sisterShip.hull) {
            if (humanShip.hull > 0) {
                if (humanShip.accuracy < .8) {
                    sisterShip.hull = sisterShip.hull - humanShip.firePower;
                    console.log(`You blasted the ship with ${humanShip.firePower} Fire Power! Well Done Soldier!`);
                    console.log(`Ship Hull: ${sisterShip.hull}`);
                } if (sisterShip.hull > 0) {
                    if (sisterShip.accuracy <= .8 && sisterShip.accuracy >= .6) {
                        humanShip.hull = humanShip.hull - sisterShip.firePower; 
                        console.log(`You've been hit with ${sisterShip.firePower} Fire Power!`);
                    } else {
                        console.log(`They missed!`);
                    }
                } else {
                    wastedShip.push('sisterShip');
                    console.log('Ship Defeated: ' + wastedShip);
                    console.log('SIS IS DOWN!!!')
                    console.log('Your Hull: ' + humanShip.hull);
                }
            }
        }
    } else if (choice2.toLowerCase() === 'flight') {
       gameOver();
       return;
    };
    let choice3 = prompt('Will you Fight or Flight?');
    if (choice3.toLowerCase() === 'fight') {
        for(brotherShip.hull; brotherShip.hull > 0; brotherShip.hull) {
            if (humanShip.hull > 0) {
                if (humanShip.accuracy < .8) {
                    brotherShip.hull = brotherShip.hull - humanShip.firePower;
                    console.log(`You blasted the ship with ${humanShip.firePower} Fire Power! Well Done Soldier!`);
                    console.log(`Ship Hull: ${brotherShip.hull}`);
                } if (brotherShip.hull > 0) {
                    if (brotherShip.accuracy <= .8 && brotherShip.accuracy >= .6) {
                        humanShip.hull = humanShip.hull - brotherShip.firePower; 
                        console.log(`You've been hit with ${brotherShip.firePower} Fire Power!`);
                    } else {
                        console.log(`They missed!`);
                    }
                } else {
                    wastedShip.push('brotherShip');
                    console.log('Ship Defeated: ' + wastedShip);
                    console.log('BRO IS DOWN!!!')
                    console.log('Your Hull: ' + humanShip.hull);
                }
            }
        }
    } else if (choice3.toLowerCase() === 'flight') {
       gameOver();
       return;
    };
    let choice4 = prompt('Will you Fight or Flight?');
    if (choice4.toLowerCase() === 'fight') {
        for(auntieShip.hull; auntieShip.hull > 0; auntieShip.hull) {
            if (humanShip.hull > 0) {
                if (humanShip.accuracy < .8) {
                    auntieShip.hull = auntieShip.hull - humanShip.firePower;
                    console.log(`You blasted the ship with ${humanShip.firePower} Fire Power! Well Done Soldier!`);
                    console.log(`Ship Hull: ${auntieShip.hull}`);
                } if (auntieShip.hull > 0) {
                    if (auntieShip.accuracy <= .8 && auntieShip.accuracy >= .6) {
                        humanShip.hull = humanShip.hull - auntieShip.firePower; 
                        console.log(`You've been hit with ${auntieShip.firePower} Fire Power!`);
                    } else {
                        console.log(`They missed!`);
                    }
                } else {
                    wastedShip.push('auntieShip');
                    console.log('Ship Defeated: ' + wastedShip);
                    console.log('AUNTIE IS DOWN!!!')
                    console.log('Your Hull: ' + humanShip.hull);
                }
            }
        }
    } else if (choice4.toLowerCase() === 'flight') {
       gameOver();
       return;
    };
    let choice5 = prompt('Will you Fight or Flight?');
    if (choice5.toLowerCase() === 'fight') {
        for(fatherShip.hull; fatherShip.hull > 0; fatherShip.hull) {
            if (humanShip.hull > 0) {
                if (humanShip.accuracy < .8) {
                    fatherShip.hull = fatherShip.hull - humanShip.firePower;
                    console.log(`You blasted the ship with ${humanShip.firePower} Fire Power! Well Done Soldier!`);
                    console.log(`Ship Hull: ${fatherShip.hull}`);
                } if (fatherShip.hull > 0) {
                    if (fatherShip.accuracy <= .8 && fatherShip.accuracy >= .6) {
                        humanShip.hull = humanShip.hull - fatherShip.firePower; 
                        console.log(`You've been hit with ${fatherShip.firePower} Fire Power!`);
                    } else {
                        console.log(`They missed!`);
                    }
                } else {
                    wastedShip.push('fatherShip');
                    console.log('Ship Defeated: ' + wastedShip);
                    console.log('DADDY IS DOWN!!!')
                    console.log('Your Hull: ' + humanShip.hull);
                }
            }
        }
    } else if (choice5.toLowerCase() === 'flight') {
       gameOver();
       return;
    };
    let choice6 = prompt('Will you Fight or Flight?');
    if (choice6.toLowerCase() === 'fight') {
        for(motherShip.hull; motherShip.hull > 0; motherShip.hull) {
            if (humanShip.hull > 0) {
                if (humanShip.accuracy < .8) {
                    motherShip.hull = motherShip.hull - motherShip.firePower;
                    console.log(`You blasted the ship with ${humanShip.firePower} Fire Power! Well Done Soldier!`);
                    console.log(`Ship Hull: ${motherShip.hull}`);
                } if (motherShip.hull > 0) {
                    if (motherShip.accuracy <= .8 && motherShip.accuracy >= .6) {
                        humanShip.hull = humanShip.hull - motherShip.firePower; 
                        console.log(`You've been hit with ${motherShip.firePower} Fire Power!`);
                    } else {
                        console.log(`They missed!`);
                    }
                } else {
                    wastedShip.push('motherShip');
                    console.log('Ship Defeated: ' + wastedShip);
                    console.log('MAMA IS DOWN!!!');
                    console.log('YOU SAVED EARTH!!!');
                    console.log('Your Hull: ' + humanShip.hull);

                }
            }
        }
    } else if (choice6.toLowerCase() === 'flight') {
       gameOver();
       return;
    };
};
// let attack = () => {
//     let choice = prompt('Will you Fight or Flight?');
//     if (choice.toLowerCase === 'fight') {
//         for(babyShip.hull; babyShip.hull > 0; babyShip.hull) {
//             if(humanShip.hull > 0){
//                 if(humanShip.accuracy < .8) {
//                     babyShip.hull = babyShip.hull - humanShip.firePower;
//                     console.log("Your Attack Hits for " + humanShip.firePower);
//                     console.log('Ship Hull = ' + babyShip.hull);
//         }
//                 if(babyShip.hull > 0) {
//                         if(babyShip.accuracy <= .8 && babyShip.accuracy >= .6) {
//                             humanShip.hull = humanShip.hull - babyShip.firePower;
//                             console.log("You've Been Hit For " + babyShip.firePower)
//                         }else {
//                             console.log("Missed Fire");
//                         }
//         }else{
//             wastedShip.push(babyShip);
//             console.log('Ship Defeated: ' + wastedShip);
//             console.log("Baby Ship is Down!");
//             console.log('Your Hull = ' + humanShip.hull);
//         }
//     }else{
//         gameOver();
//     }
//     }
//     }
//     else if (choice.toLowerCase === 'flight') {
//         gameOver();
//     };
//     if (choice.toLowerCase === 'fight') {
//         for(sisterShip.hull; sisterShip.hull > 0; sisterShip.hull) {
//             if(humanShip.hull > 0){
//                 if(humanShip.accuracy < .8) {
//                     sisterShip.hull = sisterShip.hull - humanShip.firePower;
//                     console.log("Your Attack Hits for " + humanShip.firePower);
//                     console.log('Ship Hull = ' + sisterShip.hull);
//         }
//         if(sisterShip.hull > 0) {
//                 if(sisterShip.accuracy <= .8 && sisterShip.accuracy >= .6) {
//                     humanShip.hull = humanShip.hull - sisterShip.firePower;
//                     console.log("You've Been Hit For " + sisterShip.firePower)
//                 }else {
//                     console.log("Missed Fire");
//                 }
//         }else{
//             wastedShip.push(sisterShip);
//             console.log('Ship Defeated: ' + wastedShip);
//             console.log("Sister Ship is Down!");
//             console.log('Your Hull = ' + humanShip.hull);
//         }
//         }else{
//         gameOver();
//         }
//         }
//     }
//     else if (choice.toLowerCase === 'flight') {
//         gameOver();
//     };
//     if (choice.toLowerCase === 'fight') {
//         for(brotherShip.hull; brotherShip.hull > 0; brotherShip.hull) {
//             if(humanShip.hull > 0){
//                 if(humanShip.accuracy < .8) {
//                     brotherShip.hull = brotherShip.hull - humanShip.firePower;
//                     console.log("Your Attack Hits for " + humanShip.firePower);
//                     console.log('Ship Hull = ' + brotherShip.hull);
//         }
//         if(brotherShip.hull > 0) {
//                 if(brotherShip.accuracy <= .8 && brotherShip.accuracy >= .6) {
//                     humanShip.hull = humanShip.hull - brotherShip.firePower;
//                     console.log("You've Been Hit For " + brotherShip.firePower)
//                 }else {
//                     console.log("Missed Fire");
//                 }
//         }else{
//             wastedShip.push(brotherShip);
//             console.log('Ship Defeated: ' + wastedShip);
//             console.log("Brother Ship is Down!");
//             console.log('Your Hull = ' + humanShip.hull);
//         }
//         }else{
//         gameOver();
//         }
//         }
//     }
//     else if (choice.toLowerCase === 'flight') {
//         gameOver();
//     };
//     if (choice.toLowerCase === 'fight') {
//         for(auntieShip.hull; auntieShip.hull > 0; auntieShip.hull) {
//             if(humanShip.hull > 0){
//                 if(humanShip.accuracy < .8) {
//                     auntieShip.hull = auntieShip.hull - humanShip.firePower;
//                     console.log("Your Attack Hits for " + humanShip.firePower);
//                     console.log('Ship Hull = ' + auntieShip.hull);
//         }
//         if(auntieShip.hull > 0) {
//                 if(auntieShip.accuracy <= .8 && auntieShip.accuracy >= .6) {
//                     humanShip.hull = humanShip.hull - auntieShip.firePower;
//                     console.log("You've Been Hit For " + auntieShip.firePower)
//                 }else {
//                     console.log("Missed Fire");
//                 }
//         }else{
//             wastedShip.push(auntieShip);
//             console.log('Ship Defeated: ' + wastedShip);
//             console.log("Auntie Ship is Down!");
//             console.log('Your Hull = ' + humanShip.hull);
//         }
//     }else{
//         gameOver();
//     }
//     }
//     }
//     else if (choice.toLowerCase === 'flight') {
//         gameOver();
//     };
//     if (choice.toLowerCase === 'fight') {
//         for(fatherShip.hull; fatherShip.hull > 0; fatherShip.hull) {
//             if(humanShip.hull > 0){
//                 if(humanShip.accuracy < .8) {
//                     fatherShip.hull = fatherShip.hull - humanShip.firePower;
//                     console.log("Your Attack Hits for " + humanShip.firePower);
//                     console.log('Ship Hull = ' + fatherShip.hull);
//         }
//         if(fatherShip.hull > 0) {
//                 if(fatherShip.accuracy <= .8 && fatherShip.accuracy >= .6) {
//                     humanShip.hull = humanShip.hull - fatherShip.firePower;
//                     console.log("You've Been Hit For " + fatherShip.firePower)
//                 }else {
//                     console.log("Missed Fire");
//                 }
//         }else{
//             wastedShip.push(fatherShip);
//             console.log('Ship Defeated: ' + wastedShip);
//             console.log("Father Ship is Down!");
//             console.log('Your Hull = ' + humanShip.hull);
//         }
//         }else{
//         gameOver();
//         }
//         }
//     }
//     else if (choice.toLowerCase === 'flight') {
//         gameOver();
//     };
//     if (choice.toLowerCase === 'fight') {
//         for(motherShip.hull; motherShip.hull > 0; motherShip.hull) {
//             if(humanShip.hull > 0){
//                 if(humanShip.accuracy < .8) {
//                     motherShip.hull = motherShip.hull - humanShip.firePower;
//                     console.log("Your Attack Hits for " + humanShip.firePower);
//                     console.log('Ship Hull = ' + motherShip.hull);
//         }
//         if(motherShip.hull > 0) {
//                 if(motherShip.accuracy <= .8 && motherShip.accuracy >= .6) {
//                     humanShip.hull = humanShip.hull - motherShip.firePower;
//                     console.log("You've Been Hit For " + motherShip.firePower)
//                 }else {
//                     console.log("Missed Fire");
//                 }
//         }else{
//             wastedShip.push(motherShip);
//             console.log('Ship Defeated: ' + wastedShip);
//             console.log("Mama is Down!");
//             console.log('Your Hull = ' + humanShip.hull);
//             console.log('YOU SAVED EARTH!!!')
//         }
//         }else{
//         gameOver();
//         }
//         }
//     }
//     else if (choice.toLowerCase === 'flight') {
//         gameOver();
//     };
    
// // //     while (ailenShips[currentShip].hull > 0 && humanShip.hull > 0) {
// // //        let choice = prompt('Will you Fight or Flight?'); 
// // //     //    console.log("battle.hull");
// // //        if (choice.toLowerCase === 'fight') {
// // //         for ()
// // //        }
// // //         let battle = ailenShips[currentShip];
// // //     if (hit < humanShip.accuracy) {
// // //         battle.hull -= humanShip.firepower;
// // //         alert("It's a Hit!");
// // //     } else if (hit > humanShip.accuracy) {
// // //             alert('You Missed!');
// // //         }
// // //     if (battle.hull <= 0) {
// // //         alert('Ship Down!');
// // //         // ailenShips.splice(alienShips.indexOf(battle), 1);
// // //     } else if (hit < battle.accuracy) {
// // //         humanShip.hull -= battle.firepower;
// // //     } 
// // //     if (humanShip.hull <= 0) {
// // //         console.log('You Lose!')
// // //     }
// // // } currentShip++;
// };

// console.log(attack());
// console.log('%c You have done ' + player.firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;');