import { TravelButtons } from './TravelButtons';
import CurrencyInput from 'react-currency-input-field';
import { TravelRecResults } from './TravelRecResults';
import { useState } from 'react';

export const TravelRecContainer = () => {
    const [climateSelected, setClimateSelected] = useState(null);
    const [communitySelected, setCommunitySelected] = useState(null);
    const [budgetAmount, setBudgetAmount] = useState("0");
    const [results, setResults] = useState([]);

    const climateBtns = [
        {
            type: "hot",
            select: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" fill-rule="evenodd" d="M548 818v126c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V818q23.768 2.464 36 2.464T548 818m205.251-115.66l89.096 89.095c6.248 6.248 6.248 16.38 0 22.627l-28.285 28.285c-6.248 6.248-16.379 6.248-22.627 0L702.34 753.25q18.548-15.064 27.198-23.713q8.649-8.65 23.713-27.198m-482.502 0q15.064 18.548 23.713 27.198q8.65 8.649 27.198 23.713l-89.095 89.096c-6.248 6.248-16.38 6.248-22.627 0l-28.285-28.285c-6.248-6.248-6.248-16.379 0-22.627zM512 278c129.235 0 234 104.765 234 234S641.235 746 512 746S278 641.235 278 512s104.765-234 234-234M206 476q-2.464 23.768-2.464 36T206 548H80c-8.837 0-16-7.163-16-16v-40c0-8.837 7.163-16 16-16zm738 0c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H818q2.464-23.768 2.464-36T818 476ZM814.062 180.653l28.285 28.285c6.248 6.248 6.248 16.379 0 22.627L753.25 320.66q-15.064-18.548-23.713-27.198q-8.65-8.649-27.198-23.713l89.095-89.096c6.248-6.248 16.38-6.248 22.627 0m-581.497 0l89.095 89.096q-18.548 15.064-27.198 23.713q-8.649 8.65-23.713 27.198l-89.096-89.095c-6.248-6.248-6.248-16.38 0-22.627l28.285-28.285c6.248-6.248 16.379-6.248 22.627 0M532 64c8.837 0 16 7.163 16 16v126q-23.768-2.464-36-2.464T476 206V80c0-8.837 7.163-16 16-16z"/></svg>,
            deselect: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" fill-rule="evenodd" d="M548 818v126c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V818q23.768 2.464 36 2.464T548 818m205.251-115.66l89.096 89.095c6.248 6.248 6.248 16.38 0 22.627l-28.285 28.285c-6.248 6.248-16.379 6.248-22.627 0L702.34 753.25q18.548-15.064 27.198-23.713q8.649-8.65 23.713-27.198m-482.502 0q15.064 18.548 23.713 27.198q8.65 8.649 27.198 23.713l-89.095 89.096c-6.248 6.248-16.38 6.248-22.627 0l-28.285-28.285c-6.248-6.248-6.248-16.379 0-22.627zM512 278c129.235 0 234 104.765 234 234S641.235 746 512 746S278 641.235 278 512s104.765-234 234-234m0 72c-89.47 0-162 72.53-162 162s72.53 162 162 162s162-72.53 162-162s-72.53-162-162-162M206 476q-2.464 23.768-2.464 36T206 548H80c-8.837 0-16-7.163-16-16v-40c0-8.837 7.163-16 16-16zm738 0c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H818q2.464-23.768 2.464-36T818 476ZM814.062 180.653l28.285 28.285c6.248 6.248 6.248 16.379 0 22.627L753.25 320.66q-15.064-18.548-23.713-27.198q-8.65-8.649-27.198-23.713l89.095-89.096c6.248-6.248 16.38-6.248 22.627 0m-581.497 0l89.095 89.096q-18.548 15.064-27.198 23.713q-8.649 8.65-23.713 27.198l-89.096-89.095c-6.248-6.248-6.248-16.38 0-22.627l28.285-28.285c6.248-6.248 16.379-6.248 22.627 0M532 64c8.837 0 16 7.163 16 16v126q-23.768-2.464-36-2.464T476 206V80c0-8.837 7.163-16 16-16z"/></svg>,
        },
        {
            type: "cold",
            select: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM12 18c0-1.54.59-2.94 1.54-4l-1.54.89l-2.5-1.45v-2.88L12 9.11l2.5 1.45v2.57a6 6 0 0 1 1.96-.92v-1.65l2-1.13l2.33.62l.52-1.93l-1.77-.47l.46-1.77l-1.93-.52l-.62 2.33l-2 1.13L13 7.38V5.12l1.71-1.71L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12v2.26L8.5 8.82l-2-1.13l-.58-2.33L4 5.88l.47 1.77l-1.77.47l.52 1.93l2.33-.62l2 1.13v2.89l-2 1.13l-2.33-.62l-.52 1.93l1.77.47L4 18.12l1.93.52l.62-2.33l2-1.13L11 16.62v2.26l-1.71 1.71L10.71 22L12 20.71L13.29 22l.13-.13A5.94 5.94 0 0 1 12 18"/></svg>,
            deselect: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m20.79 13.95l-2.33.62l-2-1.13v-2.88l2-1.13l2.33.62l.52-1.93l-1.77-.47l.46-1.77l-1.93-.52l-.62 2.33l-2 1.13L13 7.38V5.12l1.71-1.71L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12v2.26L8.5 8.82l-2-1.13l-.58-2.33L4 5.88l.47 1.77l-1.77.47l.52 1.93l2.33-.62l2 1.13v2.89l-2 1.13l-2.33-.62l-.52 1.93l1.77.47L4 18.12l1.93.52l.62-2.33l2-1.13L11 16.62v2.26l-1.71 1.71L10.71 22L12 20.71L13.29 22l1.41-1.41l-1.7-1.71v-2.26l2.5-1.45l2 1.13l.62 2.33l1.88-.51l-.47-1.77l1.77-.47zM9.5 10.56L12 9.11l2.5 1.45v2.88L12 14.89l-2.5-1.45z"/></svg>,
        },
    ]

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
            const response = await fetch(`http://localhost:8000/recommend/${climateSelected}/${communitySelected}/${budgetAmount}`);
            const result = await response.json();
            setResults(result)
        } catch (error: any) {
            setResults(error.message)
        }
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl'>Travel Recommendation</h1>
            <div className='mt-5 flex gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-2xl'>Climate</p>
                    <TravelButtons btns={climateBtns} sendSelected={setClimateSelected}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-2xl'>Community</p>
                    <TravelButtons btns={communityBtns} sendSelected={setCommunitySelected}/>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-2xl'>Budget</p>
                        <CurrencyInput
                        className='w-30 border-1 p-1 mb-4'
                        id="input-example"
                        name="input-name"
                        prefix="$"
                        decimalsLimit={2}
                        onValueChange={(value) => {
                            if (value !== undefined) {
                                setBudgetAmount(value)
                            }
                        }}
                        />
                </div>
                <button className='self-end mb-4 border-1 rounded-xl px-8 h-9' onClick={recommend}>Search</button>
            </div>
            <TravelRecResults results={results}/>
        </div>
    )
}