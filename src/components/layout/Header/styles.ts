import styled from 'styled-components'

export const Container = styled.div`
	height: 60px;
	background: ${props => props.theme.colors.primary};
	color: #fff;
	padding: 0 30px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	h1 {
		font-size: 1.25rem;
	}
`
