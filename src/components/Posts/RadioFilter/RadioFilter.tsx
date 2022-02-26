import React from "react";
import {Radio, Row} from "antd";
import useFilter from "./useFilter";

export const RadioFilter: React.FC = () => {
    const [filter, onChange] = useFilter()
    return (
        <Row justify={'center'}>
            <Radio.Group
                defaultValue={filter}
                buttonStyle={'solid'}
                className={'radio'}
                name={'filter'}
                onChange={(e) => onChange(e.target.value)}
            >
                <Radio.Button value={'all'}>Все посты</Radio.Button>
                <Radio.Button value={'subscribes'}>Подписки</Radio.Button>
            </Radio.Group>
        </Row>
    )
}