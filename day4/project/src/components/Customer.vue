<template>
    <div>
        <h1 v-bind="pageName">{{pageName}}</h1>
        <table class="table" v-on:="getCustomers">

            <tr class="head"><th>Name</th> <th>Surname</th></tr>
            <tr class="table" v-bind:key="customer" v-for="customer in pageCustomers">
                <th> {{customer.name}} </th>
                <th> {{customer.surname}} </th>
            </tr>
        </table>
        <Pagination v-on:set-page="setPage" v-on:inc-page="incPage" v-on:dec-page="decPage" v-bind:paginationProp="paginationProp" />
    </div>

</template>

<script>
import Pagination from './Pagination'

export default {
    name: "Customer",
    components: {
        Pagination
    },
    data(){ 
        return {
        pageName : "Customer Page",
        pageNumber: 1,
        totalPages: false,
        totalCustomersListed: 1,
        customers : [
                        {name: "Serkan", surname: "Tan"},
                        {name: "Ali", surname: "Mehmet"},
                        {name: "Serkan", surname: "Tan"},
                        {name: "Hh", surname: "Mehmet"},
                    ],
        pageCustomers : [],
        paginationProp : {
            totalPages:  this.totalPages,
            currentPage: this.pageNumber
            }
        
        }
   },
    methods: {
        getCustomers () {
            this.pageCustomers = this.customers.slice((this.pageNumber-1) * this.totalCustomersListed, ((this.pageNumber-1) * this.totalCustomersListed + this.totalCustomersListed))
        },
        paginator(){
            this.totalPages = Math.ceil(this.customers.length / this.totalCustomersListed)
            this.paginationProp= {totalPages: this.totalPages, 
                                    currentPage: this.pageNumber
                                    }
        },
        setPage(pageNumber){
            this.pageNumber = pageNumber 
            this.updateder()

        },
        incPage(){
            if (this.pageNumber + 1 != this.totalPages + 1){
                this.pageNumber += 1 
                this.updateder()
            }

        },
        decPage(){
            if (this.pageNumber - 1 != 0){
                this.pageNumber -= 1 
                this.updateder()
            }
        },
        updateder(){
            console.log(this.pageNumber)
            this.getCustomers()
            this.paginator()
        }
    },
    beforeMount(){
        this.getCustomers()
        this.paginator()

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