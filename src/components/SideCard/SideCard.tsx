import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TextField from "@material-ui/core/TextField";
import { balanceType } from "../../lib/types";

const getErrorMessage = () => <span style={{ color: "red" }}>is required</span>;

let categories = ["transport", "food", "rent", "travel", "utilities"];

interface ISideCard {
  createRow: (
    name: string,
    amount: number,
    type: balanceType,
    date: string
  ) => void;
}

export default function SideCard(props: ISideCard) {
  const { createRow } = props;
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) =>
    createRow(data.name, data.amount, data.type, data.date);

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="type"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select {...field} className={classes.formItem}>
                <MenuItem value="incomes">Incomes</MenuItem>
                <MenuItem value="expenses">Expenses</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="name"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select {...field} className={classes.formItem}>
                  {categories.map((category, index) => (
                    <MenuItem key={index} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
                {error && getErrorMessage()}
              </>
            )}
          />
          <Controller
            name="amount"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => {
              return (
                <>
                  <Input
                    {...field}
                    className={classes.formItem}
                    placeholder="Amount"
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">
                        <AttachMoneyIcon />
                      </InputAdornment>
                    }
                  />
                  {error && getErrorMessage()}
                </>
              );
            }}
          />
          <Controller
            name="date"
            control={control}
            defaultValue={new Date().toISOString().slice(0, 10)}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="date"
                    label="Date"
                    type="date"
                    className={classes.formItem}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  {error && getErrorMessage()}
                </>
              );
            }}
          />
          <Button type="submit" className={classes.formItem}>
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 400,
  },
  formItem: {
    width: "100%",
    marginTop: "20px",
  },
});
