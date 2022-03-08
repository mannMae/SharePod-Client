import styled from "styled-components";




const Dropdown = (props) =>{
    const handleChange = (e) => {
        props.changeData(()=>e.target.value)
		console.log(e.target.value);
	};
	return (
		<DropdownWrapper>
			<select onChange={handleChange}>
				{props.options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						defaultValue={props.defaultValue === option.value}
					>
						{option.name}
					</option>
				))}
				<IconSVG
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
				</IconSVG>
			</select>
		</DropdownWrapper>
	);
}

// flex Box를 사용하기 위해 display flex option을 넣은 Wrapper를 하나 생성
const DropdownWrapper = styled.div`
	display: flex;
	flex-direction:row;
	& select{
		width:540px;
		height:60px;
		padding:2px;
	}
`;


// Icon에 사용할 Icon SVG 컴포넌트 생성
const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;
`;

export default Dropdown;