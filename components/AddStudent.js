import { StyleSheet, View, Text} from "react-native";
import React, { useState } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AddStudent = () => {
    const [classID, setClassID] = useState('');
    const [className, setClassName] = useState('');
    function handleSubmit(event) {
        event.preventDefault();

    }

}