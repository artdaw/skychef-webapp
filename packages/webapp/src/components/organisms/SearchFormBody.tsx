import * as React from "react";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { Button, Container, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { NextRouter } from "next/router";

type Directions = "return" | "one_way";

type SearchFormProps = {
  walletName: string;
  isLogged: boolean;
  router?: NextRouter;
};

export const SearchFormBody = ({
  walletName,
  isLogged,
  router,
}: SearchFormProps) => {
  const [departDateValue, setDepartDateValue] = React.useState(new Date());
  const [returnDateValue, setReturnDateValue] = React.useState(new Date());

  const [directionValue, setDirectionValue] =
    React.useState<Directions>("return");

  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirectionValue((event.target as HTMLInputElement).value as Directions);
  };

  return (
    isLogged && (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Container maxWidth="sm" sx={{ marginTop: "4em" }}>
          <Grid container>
            <Grid item>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={900}
                sx={{ marginBottom: "2em" }}
              >
                Hello {walletName} 👋
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <RadioGroup
                  row
                  name="return-or-one-way"
                  value={directionValue}
                  onChange={handleDirectionChange}
                >
                  <FormControlLabel
                    value="return"
                    control={<Radio />}
                    label="Return"
                  />
                  <FormControlLabel
                    value="one_way"
                    control={<Radio />}
                    label="One way"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="From"
                defaultValue="Porto"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="To"
                defaultValue="Lisbon"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <MobileDatePicker
                label="Depart"
                value={departDateValue}
                onChange={setDepartDateValue}
                renderInput={(params) => (
                  <TextField {...params} fullWidth size="small" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <MobileDatePicker
                disabled={directionValue === "one_way"}
                label="Return"
                value={returnDateValue}
                onChange={setReturnDateValue}
                renderInput={(params) => (
                  <TextField {...params} fullWidth size="small" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Select fullWidth size="small" value="economy">
                <MenuItem value="economy">Economy</MenuItem>
                <MenuItem value="business" disabled>
                  Business
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "2em" }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => router.push("/ticket")}
              >
                Search Flight
              </Button>
            </Grid>
          </Grid>
        </Container>
      </LocalizationProvider>
    )
  );
};
