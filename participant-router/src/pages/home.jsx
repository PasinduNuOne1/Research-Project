import { useState } from "react";

import { db } from "../firebase";

import {
    collection,
    getDocs,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

export default function Home() {

    const [username, setUsername] = useState("");

    const joinStudy = async () => {

        if (!username.trim()) {

            alert("Enter username");

            return;
        }

        const ref = doc(db, "participants", username);

        const snapshot = await getDoc(ref);

        let assignedUI;

        if (snapshot.exists()) {

            assignedUI = snapshot.data().ui;

        } else {

            const allUsers = await getDocs(collection(db, "participants"));

            const count = allUsers.size;

            assignedUI = count % 2 === 0
                ? "minimal"
                : "complex";

            await setDoc(ref, {

                username,

                ui: assignedUI,

                joined: new Date()

            });
        }

        if (assignedUI === "minimal") {

            window.location.href =
                `https://pasindunuone1.github.io/Minimal_UI/?username=${encodeURIComponent(username)}`;

        } else {

            window.location.href =
                `https://pasindunuone1.github.io/Complex_UI/?username=${encodeURIComponent(username)}`;
        }

    };

    return (

        <div style={{padding:40}}>

            <h2>Game Study</h2>

            <input

                value={username}

                onChange={(e)=>setUsername(e.target.value)}

                placeholder="Username"

            />

            <button onClick={joinStudy}>

                Continue

            </button>

        </div>

    );

}