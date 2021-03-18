<template>
    <div  class="details-container">
        <div class="title-container">
            <h2>Details for town.opcina</h2>
        </div>
        <ul class="details">
            <div class="location">
                <li class="data-item">
                    <span class="data-label">Governor</span>
                    <p class="data-value">.</p>
                </li>
                <li class="data-item">
                    <span class="data-label">Vice Governor</span>
                    <p class="data-value">.</p>
                </li>
                <li class="data-item">
                    <span class="data-label">Address</span>
                    <p class="data-value">.</p>
                </li>
                <li class="data-item">
                    <span class="data-label">Zip Code</span>
                    <p class="data-value">23892</p>
                </li>
                <li class="data-item">
                    <span class="data-label">Country</span>
                    <p class="data-value">Croatia</p>
                </li>
            </div>
            <div class="contact">
                <li class="data-item">
                    <span class="data-label">Web</span>
                    <a class="data-value" href="www.example.com">www.example.com</a>
                </li>
                <li class="data-item">
                    <span class="data-label">Email</span>
                    <a class="data-value" href="mailto:town@town.com">town@town.com</a>
                </li>
                <li class="data-item">
                    <span class="data-label">Phone</span>
                    <a class="data-value" href="tel:+310310310">031 031 0310</a>
                </li>
                <li class="data-item">
                    <span class="data-label">Fax</span>
                    <p class="data-value">031 031 0230</p>
                </li>
            </div>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
$primary: #6C63FF
$light: #756DFF
@media only screen and (max-width: 600px)
    .details-container
        width: 100%
        margin-top: 10%
        h2
            padding: 15px 0 15px 15px 
        .details
            flex-direction: column
            background: #F0EFFF
            .data-item
                margin: 20px auto
                justify-content: space-between
                width: 60%
@media only screen and (min-width: 600px)
    .details-container
        width: 100%
        margin: auto
        .title-container
            padding: 40px 250px 40px 300px
            width: 1500px 
            transform: translateX(-900px)
            display: flex
            justify-content: flex-end
            h2
                color: white
        .details
            flex-direction: row
            width: fit-content
            margin: 5% auto
            .data-item
                margin: 30px 50px
                justify-content: space-between
                min-width: 22vw


.details-container
    background: white
    .title-container
        color: white
        background: $primary
        font-weight: 400
        -webkit-box-shadow: -2px -1px 25px -8px rgba(133,133,133,1)
        -moz-box-shadow: -2px -1px 25px -8px rgba(133,133,133,1)
        box-shadow: -2px -1px 25px -8px rgba(133,133,133,1)
    .details
        list-style-type: none
        display: flex
        .data-item
            display: flex
            flex-direction: row
            .data-label
                font-weight: bold
                color: $primary
            .data-value
                color: $light
                text-decoration: none
            .data-value::after
                content: ""
                display: block
                margin: 0 auto
                min-width: 150px
                border-bottom: 2px solid $primary
                
            
</style>