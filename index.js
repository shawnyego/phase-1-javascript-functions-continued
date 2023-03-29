// code your solution here
const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`



const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`


const wrapAdjective = (wrapper = '*') => {return function( object = 'special'){
    return `You are ${wrapper}${object}${wrapper}!`
}}