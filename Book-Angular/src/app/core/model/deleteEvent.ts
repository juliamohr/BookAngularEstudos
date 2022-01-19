export interface DeleteEvent {
  id: number;
  callback: (entities: any[]) => void
}
