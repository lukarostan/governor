<template>
    <div class="footer">
        <ul>
            <li class="bold">www.probnizadatak.com</li>
            <li class="white"><a href="mailto:mail@mail.com">mail@probnizadatak.com</a></li>
        </ul>
        <ul>
            <li class="bold">UHP DIGITAL</li>
            <li class="white">DARMSTADT / OSIJEK / ZAGREB</li>
        </ul>
        <ul>
            <li class="bold">governor</li>
            <li class="white">who's your governor?</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .footer
        flex-direction: column

@media only screen and (min-width: 600px)
    .footer
        flex-direction: row

    
.footer
    background: #3E3C61
    width: 100%
    height: fit-content
    display: flex
    justify-content: space-around
    
    ul
        list-style-type: none
        margin: 25px auto
        li
            margin: 10px 0
            text-align: center
            a
                text-decoration: none
                color: #EBEBEE
        .bold
            font-weight: bold
            color: #6C63FF
        .white
            color: #EBEBEE
</style>