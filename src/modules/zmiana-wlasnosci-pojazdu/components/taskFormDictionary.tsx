import AddCoownerFormContext from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/addCoownerFormContext";
import React from "react";

interface TaskFormDictionary {
    [key: string]: React.ReactNode;
}

export const taskFormDictionary: TaskFormDictionary = {
    "addCoowner": <AddCoownerFormContext />,
}