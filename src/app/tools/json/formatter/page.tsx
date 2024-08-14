"use client";

import { useState } from "react";

function validateJson(json: string): boolean {
    try {
        JSON.parse(json);
        return true;
    } catch (e) {
        return false;
    }
}

export default function Page() {
    return (
        <div className="">

        </div>
    )
}