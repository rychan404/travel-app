import { TravelButtons } from './TravelButtons';
import CurrencyInput from 'react-currency-input-field';
import { TravelRecResults } from './TravelRecResults';
import { useState } from 'react';

export const TravelRecContainer = () => {
    const [communitySelected, setCommunitySelected] = useState(null);
    const [budgetAmount, setBudgetAmount] = useState("0");
    const [results, setResults] = useState([]);
    const [resultsShown, setResultsShown] = useState(false);

    const communityBtns = [
        {
            type: "rural",
            select: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -15 256 256"><path fill="currentColor" d="M240 192h-8v-61.43l1.49 2.08a8 8 0 1 0 13-9.3l-40-56a8 8 0 0 0-2-1.94L137 18.77l-.1-.07a16 16 0 0 0-17.76 0l-.1.07l-67.59 46.65a8 8 0 0 0-2 1.94l-40 56a8 8 0 1 0 13 9.3l1.55-2.09V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M112 80h32a8 8 0 1 1 0 16h-32a8 8 0 1 1 0-16m52.64 40L128 146.17L91.36 120ZM72 125.83L114.24 156L72 186.17ZM91.36 192L128 165.83L164.64 192Zm92.64-5.83L141.76 156L184 125.83Z"/></svg>,
            deselect: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -15 256 256"><g fill="currentColor"><path d="M184 120v80H72v-80Z" opacity=".2"/><path d="M240 192h-8v-61.43l1.49 2.08a8 8 0 1 0 13-9.3l-40-56a8 8 0 0 0-2-1.94L137 18.77l-.1-.07a16 16 0 0 0-17.76 0l-.1.07l-67.59 46.65a8 8 0 0 0-2 1.94l-40 56a8 8 0 1 0 13 9.3l1.55-2.09V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 108.17l21.7-30.38L128 32l66.3 45.78l21.7 30.39V192h-24v-72a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v72H40Zm88 42L97 128h62Zm48-14.62v48.91L141.76 160ZM114.24 160L80 184.46v-48.91Zm13.76 9.83L159 192H97ZM104 88a8 8 0 0 1 8-8h32a8 8 0 1 1 0 16h-32a8 8 0 0 1-8-8"/></g></svg>,
        },
        {
            type: "urban",
            select: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M72 184a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm64 96a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm64 0a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"/></svg>,
            deselect: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M240 210h-10V88a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v42h-52V40a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v170H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M166 94h52v116h-52Zm-12 48v68h-52v-68ZM38 46h52v164H38Zm32 26v16a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m52 16v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m64 0v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m0-48v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0"/></svg>,
        },
    ]

    const recommend = async () => {
        try {
            const response = await fetch(`http://localhost:8000/recommend/${communitySelected}/${budgetAmount}`);
            const result = await response.json();
            setResults(result)
        } catch (error: any) {
            setResults(error.message)
        } finally {
            setResultsShown(true)
        }
    }

    return (
        <div className='mt-10 flex justify-center items-center flex-col bg-sky-100 p-20 rounded-xl shadow-lg font-[Roboto]'>
            <h1 className='text-3xl font-medium'>Your Preferences</h1>
            <div className='mt-5 flex gap-7 items-center'>
                <div className='flex flex-col justify-center items-center bg-indigo-200 p-3 rounded-3xl shadow-md'>
                    <p className='text-2xl'>Community</p>
                    <TravelButtons btns={communityBtns} sendSelected={setCommunitySelected}/>
                </div>
                <div className='flex flex-col gap-3 bg-indigo-200 p-3 rounded-3xl shadow-md'>
                    <p className='text-2xl'>Budget</p>
                        <CurrencyInput
                        className='w-30 border-2 border-indigo-600 p-1 mb-4 rounded-lg'
                        id="input-example"
                        name="input-name"
                        prefix="$"
                        placeholder="$0.00"
                        decimalsLimit={2}
                        onValueChange={(value) => {
                            if (value !== undefined) {
                                setBudgetAmount(value)
                            }
                        }}
                        />
                </div>
                <button className='self-end mb-4 border-2 border-emerald-400 bg-emerald-200 text-green-950 rounded-xl px-4 h-10 shadow-md font-medium' onClick={recommend}>Go</button>
            </div>
            {
                resultsShown ? (
                    <TravelRecResults results={results} setResultsShown={setResultsShown}/>
                ) : (
                    <></>
                )
            }
        </div>
    )
}