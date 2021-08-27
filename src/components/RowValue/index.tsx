import React from 'react';
import {Row, Label, Value} from './styles';

interface RowValueProps {
	label: string;
	value: string | number;
}

const RowValue = ({label, value}: RowValueProps) => (
	<Row>
		<Label>{label}:</Label>
		<Value>{value}</Value>
	</Row>
);

export default RowValue;
