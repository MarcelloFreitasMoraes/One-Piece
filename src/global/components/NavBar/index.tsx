import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Logo from '@/global/assets/logo.webp'
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NavProps } from './types';
import { usePiece } from '@/global/Provider/context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar({  IsSearch, isBack }: NavProps) {
    const { push } = useRouter()    
    const { data, setData, fetchOnePieceData} = usePiece()
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
      fetchOnePieceData()
    }, []);
  
    const pieceFilter = (name: string) => {
      setSearchTerm(name)
      if (name === "") {
        fetchOnePieceData();
      }
      let filterPiece = [];
      for (let i in data) {
        if (data[i]?.name?.toLowerCase()?.includes(name.toLowerCase())) {
          filterPiece.push(data[i]);
        }
      }
      setData(filterPiece);
    };

    const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearchTerm(event.target.value);
    };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Image src={Logo} alt={'logo'}
              onClick={() => push('/Home')}
            />
          </IconButton>
          {IsSearch &&
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={(e) => pieceFilter(e.target.value)}
              />
            </Search>
          }
          {isBack &&
            <Grid sx={{ display: 'flex' }} onClick={() => push('/characters')}>
              <><ArrowBackIosNewIcon sx={{ cursor: 'pointer' }} />
                <Typography sx={{ cursor: 'pointer' }}>VOLTAR</Typography></>
            </Grid>
          }
        </Toolbar>
      </AppBar>

    </Box>
  );
}