
type ChartPropsType = {
  data: {
    date: string;
    count: number;
  }[];
};

function Chart({ data }: ChartPropsType) {
  return (
    <div>Chart</div>
  )
}

export default Chart