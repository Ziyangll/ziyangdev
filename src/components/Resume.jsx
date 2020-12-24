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
						href='https://drive.google.com/file/d/1X8CGkpAO3g_e5gmT8QZczrWgbmtfUTjB/view?usp=sharing'>
						Download
					</Button>
				</ThemeProvider>
			</div>

			<iframe
				title='resume'
				className='resume'
				src='https://drive.google.com/file/d/1X8CGkpAO3g_e5gmT8QZczrWgbmtfUTjB/preview'>
				Your browser doesn't support iframes
			</iframe>
			
		</div>
	)
}

export default Resume
