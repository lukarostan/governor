<template>
    <div class="content">
        <div class="triangle"></div>
        <div class="title">
            <h1>Who's Your <br><b>Governor?</b></h1>
        </div>
        <Form />
        <Details />
    </div>
</template>
<script>
import Form from './Form'
import Details from './Details'
export default {
    components:{
        Form,
        Details
    }
}
</script>
<style lang="sass" scoped>
$primary: #6C63FF

@media only screen and (max-width: 600px)
    .content
        width: 100%
        .triangle
            display: none
        .title
            margin: auto

@media only screen and (min-width: 600px)
    .content
        width: 65%
        .title
            position: relative
            top: 100px
            left: 30px
    
.content
    margin: auto
    min-height: calc(100vh + 110px)
    .triangle
        width: 0
        height: 0
        border-style: solid
        border-width: 2500px 0 0 2500px
        border-color: transparent transparent transparent #ffffff
        position: absolute
        left: -100px
        bottom: -550px
        z-index: -1
    .title
        width: fit-content
        margin: 50px
        h1
            font-weight: 400
            font-family: 'Open Sans'
            font-size: 60px
            ::before
                content: ""
                position: absolute
                top: 0px
                width: 100px
                height: 10px
                background: $primary
            b
                color: $primary

</style>