import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { CascadeSelect } from 'primereact/cascadeselect';
import { grades } from '../../components/admin/Grades.tsx';
import { Button } from 'primereact/button';

const defaultGrades = grades || [];

export default function NewTeam() {
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="border-cyan-400 border-2 p-12 rounded-md relative">
            <Button icon="pi pi-times" rounded outlined severity="danger" className="absolute top-0 right-0 m-2 text-xl font-bold" aria-label="Cancel" />
            <h1 className="text-2xl font-bold text-center">Új csapat</h1>
            <div className="card flex justify-content-center p-3">
            <FloatLabel>
                <InputText id="csapatnev" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="csapatnev">Csapat név</label>
            </FloatLabel>
            </div>
            <div className="card flex justify-content-center">
            <CascadeSelect 
                value={selectedGrade} 
                onChange={(e) => setSelectedGrade(e.value)} 
                options={defaultGrades}
                optionLabel="class" 
                optionGroupLabel="name" 
                optionGroupChildren={['class']}
                className="w-full md:w-14rem" 
                breakpoint="767px" 
                placeholder="Osztály" 
                style={{ minWidth: '14rem' }}  
            />
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3 p-3">
            <Button label="Létrehozás" icon="pi pi-check" loading={loading} onClick={load} />
            </div>
        </div>
    );
};