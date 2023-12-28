import {configureStore} from "@reduxjs/toolkit";

const initDestination = {cur:0};

const Destination = function(state=initDestination,action){
    switch(action.type){
      case "img":
        return {cur:action.payload}
     default:
        return state
    }
};

const initCrew = {cur:0}

const Crew = function(state=initCrew,action){
    switch(action.type){
      case "contentCrew":
        return {cur:action.payload};
    default:
        return state
    }
}

const initTech = {cur:0};

const Tech = function(state=initTech,action){
    switch(action.type){
        case "contentTech":
          return {cur:action.payload};
      default:
          return state
      }
};


const IsOpen = function(state={isOpen:false},action){
    switch(action.type){
        case "isOpen":
          return {isOpen:!state.isOpen};
      default:
          return state
      }
};


const Slider = function(state={cur:0},action){
    switch(action.type){
        case "slider":
          return {cur:action.payload};
      default:
          return state
      }
}


const store = configureStore({
    reducer:{
       currentDes:Destination,
       currentCre:Crew,
       currentTech:Tech,
       IsOpen,
       Slider
    }
});

console.log(store.getState());





export default store