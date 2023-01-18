import React, { useState } from "react";
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';

const Drawer_ = (props) => {

    const [open, setOpen] = useState(true);
    return (
        <Drawer open={open} onClose={() => setOpen(false)}
            placement="right"
            size="md"
        >
            <Drawer.Body
                // className={`absolute z-500 bg-yellow-200 `}
            >
                <Placeholder.Paragraph />
            </Drawer.Body>
        </Drawer>
    )
}

export default Drawer_