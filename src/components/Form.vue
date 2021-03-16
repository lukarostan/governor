<template>
    <div class="form-container">
        <form>
            <div class="form-set" id="county">
                <label for="county">County</label>
                <input class="text-input" type="text" name="county" placeholder="County">
            </div>
            <div class="form-set" id="town">
                <label for="town">Town or Comunnity</label>
                <input class="text-input" type="text" name="town" placeholder="Town or Community">
            </div>
            <button id="submit" type="submit">Show Details</button>
            <div id="s">s</div>
        </form>
        <img class="speaker" src="../assets/Illustration-Speaker.svg" alt="">
    </div>
    
</template>
<script>
export default {
    
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
        form
            button
                



.form-container
    display: flex
    justify-content: space-around
    form
        display: grid
        grid-template-columns: 1fr 1fr
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
        button
            background: $primary
            color: white
            border: none
            padding: 15px 45px
            
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
        
        width: 400px        
</style>