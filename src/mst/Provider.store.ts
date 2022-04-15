import { log } from "console";
import { type Instance, onSnapshot, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import Person from './Person.model';
import Student from './Student.model';

export const Root = types
    .model({
        persons: types.optional(types.array(Person), []),
        students: types.optional(types.array(Student), []),
        isFetchedWithLocalStorage: false
    })
    .actions((self) => ({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            this.saveToLocalStorage();
        },
        getPersonById(id: string){
            return self.persons.filter(item=>item.id===id)[0]
        },
        saveToLocalStorage() {
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify({persons:self.persons, students:self.students}))
        },
        clearLocalStorage(){
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify({persons:[], students: []}))
            window.location.reload()
        },
        setLocalStorageTestData() {
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify(initialState))
            setTimeout(() => window.location.reload(), 2000);
            
        }
    }))
    .actions((self) => ({
        getLocalStorage(){
            const isLSData = localStorage && localStorage.getItem('Lab5_Data')
            const lsData = isLSData ? JSON.parse(localStorage.getItem('Lab5_Data') || '') : {}
            if(!self.isFetchedWithLocalStorage){
                if(lsData && lsData.persons && lsData.persons.length == 0 && lsData.students && lsData.students.length == 0) {
                    self.saveToLocalStorage()
                }
                else {
                    self.updateField("persons", lsData.persons || [])
                    self.updateField("students", lsData.students || [])
                }
                self.isFetchedWithLocalStorage = true
            }
            return lsData
        },
    }))
 

const rootStore = Root.create({})
const initialState = {
    persons: [
        {
            id: 'p-001',
            firstName: "Jimbei",
            secondName:"Alexandru",
            gender:"male",
            age:22,
            height:180
        },
        {
            id: 'p-002',
            firstName: "Jimbei",
            secondName:"Alexandru",
            gender:"male",
            age:22,
            height:180
        },
        {
            id: 'p-003',
            firstName: "Jimbei",
            secondName:"Alexandru",
            gender:"male",
            age:22,
            height:180
        },
        {
            id: 'p-004',
            firstName: "Jimbei",
            secondName:"Alexandru",
            gender:"male",
            age:22,
            height:180
        },
        {
            id: 'p-005',
            firstName: "Jimbei",
            secondName:"Alexandru",
            gender:"male",
            age:22,
            height:180
        },
        {
            id: 'p-006',
            firstName: "Jimbei",
            secondName:"Alexandru",
            gender:"male",
            age:22,
            height:180
        },
    ],
    students: [
    {
        id: 'st-001',
        personId: 'p-001',
        university: "UTM",
        speciality:"RM"
    },
    {
        id: 'st-002',
        personId: 'p-002',
        university: "UTM",
        speciality:"RM"
    },
    {
        id: 'st-003',
        personId: 'p-003',
        university: "UTM",
        speciality:"RM"
    },
    {
        id: 'st-004',
        personId: 'p-003',
        university: "UTM",
        speciality:"RM"
    },
    {
        id: 'st-005',
        personId: 'p-003',
        university: "UTM",
        speciality:"RM"
    },
    {
        id: 'st-006',
        personId: 'p-003',
        university: "UTM",
        speciality:"RM"
    }
    ]
}
export default rootStore
