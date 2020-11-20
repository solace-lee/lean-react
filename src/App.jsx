import React, { useRef, useState, useImperativeHandle, useEffect } from 'react'
// 1. context 2. redux 3. bus 4. 回调  
const Demo1 = React.forwardRef((props, ref) => {
    const [count, setCount] = useState(0)
    const inputRef = useRef(null)

    useImperativeHandle(
        ref,
        () => ({
            input: inputRef.current,
            count
        }),
    )

    // useEffect(() => {
    //     props.func()
    // }, [count])


    return (
        <>
            <h2>demo1</h2>
            {count}
            <input type="text" ref={inputRef} />
            <button onClick={e => {
                setCount(prev => prev + 1)
            }}>click</button>
        </>
    )
})

const App = () => {
    const demo1Ref = useRef(null)

    function func() {
        console.log('run run ');
    }

    return (
        <>
            <Demo1 ref={demo1Ref} func={func} />
            <button onClick={e => {
                // console.log(demo1Ref.current.input)
                // demo1Ref.current.focus()
                // window.input = demo1Ref.current.input
                demo1Ref.current.input.focus()
            }}>clickAAA</button>

            <hr />
            {demo1Ref.current && demo1Ref.current.count}
        </>
    )
}

export default App