
import Typography from '@mui/material/Typography';
import CardNew from './CardNew';
export default function MainContent() {


    return (
        <>
            <div className="flex-grow bg-green-500">
                <div className='flex flex-col items-center justify-center p-4'>
                    <Typography sx={{ mx: 'auto' }} variant='h5'>Recent News</Typography>
                </div>
                <div className='space-y-4 sm:space-y-0 sm:grid sm:grid-cols-5 sm:gap-6 sm:items-center sm:justify-center ml-4'>
                 <CardNew></CardNew>
                </div>
            </div>

        </>
    );
}
