import React from 'react'
import { ThemeProvider, Button } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import '../styles/styles.css'
import theme from '../styles/theme'

function Resume() {
	return (
		<div className='main iframe'>
			<div className='download-button'>
				<ThemeProvider theme={theme}>
					<Button
						variant='contained'
						startIcon={<GetAppIcon />}
						href='https://docs.google.com/document/d/1aHJuCZOCFbpmeYudKQWdWOiMXtNY0Fp8X9pUo-5hDas/edit?usp=sharing'>
						Download
					</Button>
				</ThemeProvider>
			</div>

			<iframe
				title='resume'
				className='resume'
				src='https://docs.google.com/document/d/e/2PACX-1vRJAK5l6JkhtPKW0hojDVVfRXbws6cs0aVHC3ZI1GoTuJho6nYSY53Y0CbzdDoPyO0c0VutEl8PWryF/pub?embedded=true'>
				Your browser doesn't support iframes
			</iframe>
		</div>
	)
}

export default Resume
