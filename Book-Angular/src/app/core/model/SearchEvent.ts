export interface SeacrhEvent
{
  query: string;
  callback: (entities: any[])=> void
}
