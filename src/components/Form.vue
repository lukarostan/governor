<template>
    <div class="form-container">
        <form>
            <div class="form-set" id="county">
                <label for="county">County</label>
                <input 
                class="text-input" 
                type="text" 
                name="county" 
                id="countyInput"
                placeholder="County"
                autocomplete="off"
                @focus="showSelector('county-selector')"
                @focusout="hideSelector('county-selector')"
                v-model="countyFilter">
                <ul class="form-selector" id="county-selector">
                    <li 
                    v-for="county in filteredCounties" 
                    :key="county.id"
                    v-on:mousedown="countyClickHandler(county.zupanija)"
                    >
                    {{county.zupanija}}
                    </li>
                </ul>
            </div>
            <div class="form-set" id="town">
                <label for="town">Town or Comunnity</label>
                <input 
                class="text-input" 
                type="text" 
                name="town" 
                id="townInput"
                placeholder="Town or Community"
                autocomplete="off"
                @focus="showSelector('town-selector')"
                @focusout="hideSelector('town-selector')"
                v-model="townFilter">
                <ul class="form-selector" id="town-selector">
                    <li
                    v-for="town in filteredTowns"
                    :key="town.id"
                    v-on:mousedown="townClickHandler(town)"
                    >
                    {{town.opcina}}
                    </li>
                </ul>
            </div>
            <button id="submit" type="submit">Show Details</button>
            <div id="s">s</div>
        </form>
        <img class="speaker" src="../assets/Illustration-Speaker.svg" alt="">
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            countyFilter: '',
            townFilter: '',
            selectedCounty: ''
        }
    },
    computed:{
        towns(){
            return this.$store.state.towns
        },
        counties(){
            return this.$store.state.counties
        },
        filteredCounties(){
            return this.$store.state.counties.filter((county)=> {
                return county.zupanija.match(this.countyFilter);
            })
        },
        filteredTowns(){
            return this.$store.state.towns.filter((town)=> {
                return town.opcina.match(this.townFilter) 
            })
        },
        
    },
    methods:{
        showSelector: (id) => document.getElementById(id).style.display = "block",
        hideSelector: (id) => document.getElementById(id).style.display = "none",
        countyClickHandler: ( zupanija, selectedCounty) => {
            selectedCounty = zupanija
            console.log(selectedCounty)
            document.getElementById("countyInput").setAttribute('value', zupanija)
        },
        townClickHandler: (town) =>{
            document.getElementById("townInput").setAttribute('value', town.opcina)
            document.getElementById("countyInput").setAttribute('value', town.zupanija)
            }
    
    }
}
</script>
<style lang="sass" scoped>
$primary: #6C63FF
@media only screen and (max-width: 600px)
    .form-container
        form
            width: 90%
            button
                margin-top: 5%
        .speaker
            display: none

@media only screen and (min-width: 600px)
    .form-container
        margin: 15% 0
        form
            display: grid
            grid-template-columns: 300px 200px
            grid-template-rows: 100px 120px
            button
                transform: translateY(55%)
                


.form-container
    display: flex
    justify-content: space-around
    form
        
        .form-set
            display: flex
            flex-direction: column
            height: fit-content
            label
                font-size: 14px
                color: #282828
                padding: 4px
            .text-input
                background: #F0EFFF
                border: none
                padding: 15px
                color: #6D64FF
                min-width: 300px
            .text-input:focus
                outline: none
            .text-input::placeholder
                color: #B2AEFF
            .form-selector
                list-style-type: none
                display: none
                overflow-y: auto
                border-top: 3px solid $primary
                height: 150px
                max-width: 300px
                z-index: 2
                li
                    background: white
                    padding: 15px
                    transition: 0.15s
                li:nth-of-type(2n)
                    background: #F0EFFF
                li:hover
                    cursor: pointer
                    color: white
                    background: $primary
        button
            background: $primary
            color: white
            border: none
            padding: 15px 20px
            height: fit-content
        #county
            order: 1
        #town
            order: 3
        #submit
            order: 4
        #s
            order: 2
            opacity: 0
    .speaker
        margin-top: -200px
        width: 400px        
</style>