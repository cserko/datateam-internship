<template>
    <div>
        <h1 v-bind="pageName">{{pageName}}</h1>
        <table class="table" v-on:="getCustomers">
            <tr class="head"><th>Name</th> <th>Surname</th></tr>
            <tr class="table" v-bind:key="customer.id" v-for="customer in elementUpdate">
                <th> {{customer.name}} </th>
                <th> {{customer.surname}} </th>
            </tr>
        </table>
        <Paginator v-on:element-update="elementUpdate" v-bind:elements="customers"/>

        <!--<Pagination v-on:set-page="setPage" v-on:inc-page="incPage" v-on:dec-page="decPage" v-bind:paginationProp="paginationProp" />-->
    </div>

</template>

<script>
//import Pagination from './Pagination'
import Paginator from './Paginator'


export default {
    name: "Customer",
    components: {
        Paginator
    },
    data(){ 
        return {
            pageName : "Customer Page",
            pageCustomers : [{id: "1", name: "Sekra", surname:"ta"}],
            customers : [
                            {id: "2", name: "Serkan", surname: "Tan"},
                            {id: "3", name: "Ali", surname: "Mehmet"},
                            {id: "4", name: "Serkan", surname: "Tan"},
                            {id: "5", name: "Hh", surname: "Mehmet"},
                        ],

        }
    },

    methods: {
        elementUpdate (elements) {
            this.pageCustomers =  elements
            return this.pageCustomers
        },
    },

}
</script>

<style scoped>
    .table {
        width: 80%;
        border: 1px solid black;
        border-spacing: 10px;
        border-color: gray;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .head {
        font-size: 130%;
    }

</style>