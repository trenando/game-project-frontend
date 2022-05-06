import React, { useMemo } from "react"
import { BaseEditor, createEditor } from "slate"
import { Editable, ReactEditor, Slate, withReact } from "slate-react"
import { useField } from "formik"

export const SlateEditor = ({ ...props }: any) => {

    const editor: BaseEditor & ReactEditor = useMemo(() => withReact(createEditor()), [])
    const [field, meta, helpers] = useField({ name: props.name, type: "text" });

    const { value } = meta;
    const { setValue } = helpers;

    const someFunc = (value: any) => {
        setValue(value[0].children[0].text);
        //setValue(JSON.stringify(value))
    }

    //const renderElement = useCallback(props => <DefaultElement {...props} />, [])
    //const renderLeaf = useCallback(props => <Leaf {...props} />, [])

    return (
        <Slate {...field} {...props} name="postText" editor={editor} value={value} onChange={someFunc}>
            <Editable renderElement={DefaultElement} />
        </Slate>
    )
}

const DefaultElement = (props: any) => {
    return <p {...props.attributes}>{props.children}</p>
}